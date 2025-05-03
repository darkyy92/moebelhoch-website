import React from 'react';
import { Partner } from '@/data/partners';
import { cn } from '@/lib/utils';

interface PartnerListProps {
  partners: Partner[];
  className?: string;
}

export default function PartnerList({ partners, className }: PartnerListProps) {
  const baseStyles = "inline-flex items-center px-5 py-2 text-sm font-medium rounded-full bg-movers-primary text-white shadow-sm hover:shadow-md hover:bg-movers-primary/90 transition-all";
  
  return (
    <div className={cn(
      'flex flex-wrap justify-center gap-x-3 gap-y-2',
      className
    )}>
      {partners.map((partner, index) => {
        return partner.url ? (
          <a 
            key={index} 
            href={partner.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className={baseStyles}
          >
            {partner.name}
          </a>
        ) : (
          <span key={index} className={baseStyles}>
            {partner.name}
          </span>
        );
      })}
    </div>
  );
}
