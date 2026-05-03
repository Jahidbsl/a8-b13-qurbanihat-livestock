"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const MyProfilePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // State for toggling edit mode and holding form data
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        image: user?.image || ''
    });

    if (isPending) return <div className="p-8 text-center">Loading...</div>;

    const handleUpdate = async (e) => {
        e.preventDefault();
        // Placeholder for your update logic (e.g., axios.patch('/api/user/update', formData))
        console.log("Updating profile with:", formData);
        setIsEditing(false);
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
            <div className="flex flex-col items-center">
                {/* Profile Image Section */}
                <div className="relative group">
                    <Image
                        src={formData.image || 'https://via.placeholder.com/150'} 
                        alt="Profile" 
                        className="w-32 h-32 rounded-full object-cover border-4 border-indigo-50"
                    />
                    {isEditing && (
                        <div className="mt-2">
                            <input 
                                type="text" 
                                placeholder="Image URL" 
                                className="text-xs p-1 border rounded w-full"
                                value={formData.image}
                                onChange={(e) => setFormData({...formData, image: e.target.value})}
                            />
                        </div>
                    )}
                </div>

                {/* Profile Info / Form */}
                <div className="mt-6 w-full">
                    {isEditing ? (
                        <form onSubmit={handleUpdate} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Display Name</label>
                                <input 
                                    type="text" 
                                    className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    type="submit" 
                                    className="flex-1 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                                >
                                    Save Changes
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-md hover:bg-gray-200 transition"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="text-center">
                            <h2 className="text-2xl font-bold text-gray-800">{user?.name || "Anonymous User"}</h2>
                            <p className="text-gray-500">{user?.email}</p>
                            <button 
                                onClick={() => setIsEditing(true)}
                                className="mt-4 px-6 py-2 bg-indigo-50 text-indigo-600 font-semibold rounded-full hover:bg-indigo-100 transition"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>

            <hr className="my-8 border-gray-100" />
            
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-400 uppercase text-xs">Role</p>
                    <p>{user?.role || 'User'}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="font-semibold text-gray-400 uppercase text-xs">Status</p>
                    <p className="text-green-600 font-medium">Active</p>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;