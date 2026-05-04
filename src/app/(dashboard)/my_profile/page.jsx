"use client";
import { authClient } from '@/lib/auth-client';
import Lottie from 'lottie-react';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import yearOx from "@/assets/Year of the Ox.json";

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [isEditing, setIsEditing] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    
    const [formData, setFormData] = useState({
        name: '',
        image: ''
    });

    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name || '',
                image: user.image || ''
            });
        }
    }, [user]);

    if (isPending) return  <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="w-48 h-48">
          <Lottie animationData={yearOx} loop={true} />
        </div>
        <p className="text-emerald-600 font-bold animate-pulse tracking-widest uppercase text-sm">
          Preparing Livestock...
        </p>
      </div>;

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prev) => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsUpdating(true);

        try {
            const { data, error } = await authClient.updateUser({
                name: formData.name,
                image: formData.image, 
            });

            if (error) {
                toast.error(error.message || "Failed to update profile");
            } else {
                toast.success("Profile updated successfully!");
                setIsEditing(false);
            }
        } catch (err) {
            toast.error("An unexpected error occurred");
            console.error(err);
        } finally {
            setIsUpdating(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-100 mb-10">
            <div className="flex flex-col items-center">
               
                <div className="relative w-32 h-32 mb-4">
                    <Image
                        src={formData.image || 'https://via.placeholder.com/150'} 
                        alt="Profile"
                        fill 
                        className="rounded-full object-cover border-4 border-indigo-100 shadow-sm"
                    />
                </div>

                {isEditing && (
                    <div className="mb-6 w-full max-w-xs text-center">
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-wider">
                            Change Avatar
                        </label>
                        <input 
                            type="file" 
                            accept="image/*"
                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100 cursor-pointer"
                            onChange={handleImageChange}
                        />
                    </div>
                )}

                <div className="mt-2 w-full">
                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="space-y-5">
                            <div>
                                <label className="block text-sm font-semibold text-gray-600 mb-1">Full Name</label>
                                <input 
                                    type="text" 
                                    required
                                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    type="submit" 
                                    disabled={isUpdating}
                                    className="flex-1 bg-indigo-600 text-white py-2.5 rounded-lg font-medium hover:bg-indigo-700 active:scale-95 transition disabled:bg-indigo-300"
                                >
                                    {isUpdating ? "Saving..." : "Save Changes"}
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => {
                                        setIsEditing(false);
                                        setFormData({ name: user.name, image: user.image });
                                    }}
                                    className="flex-1 bg-gray-100 text-gray-600 py-2.5 rounded-lg font-medium hover:bg-gray-200 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-800">{user?.name || "No Name Set"}</h2>
                            <p className="text-gray-500 font-medium mb-6">{user?.email}</p>
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="px-8 py-2.5 bg-indigo-600 text-white font-bold rounded-full hover:bg-indigo-700 shadow-md hover:shadow-indigo-200 transition-all active:scale-95"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-50 grid grid-cols-2 gap-4">
                <div className="p-4 bg-indigo-50/50 rounded-2xl border border-indigo-100">
                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Account Role</p>
                    <p className="font-bold text-indigo-900 capitalize">{user?.role || 'User'}</p>
                </div>
                <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Account Status</p>
                    <p className="font-bold text-emerald-900">Verified</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;