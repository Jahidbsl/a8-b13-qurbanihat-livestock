import { Button, Card } from "@heroui/react";
import Image from "next/image";

const FeatureCard = ({ feature }) => {
 
  const { name, image, description } = feature || {};

  return (
    
            <Card className="min-h-[200px] overflow-hidden rounded-3xl">
            {/* Background image */}
            <Image
              alt={name}
              aria-hidden="true"
              height={800}
              width={800}
              className="absolute inset-0 h-full w-full object-cover"
              src={image}
            />
            {/* Header */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            {/* Footer */}
            <Card.Footer className="z-10 mt-auto flex items-center justify-between">
              <div>
               <Card.Title className="text-2xl font-semibold tracking-wide text-white">
                {name}
              </Card.Title>
                <Card.Description className="text-sm leading-5 font-medium text-white">
                {description}
              </Card.Description>
              </div>
             
            </Card.Footer>
          </Card>
  );
};
export default FeatureCard