import React from 'react';

export enum hrVariants {
  primary = 'primary',
  secondary = 'secondary',
}

export enum hrThiknessVariants {
  thin = 'thin',
  medium = 'medium',
  thick = 'thick',
}

export enum hrSizeVariants {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export interface HrProps {
  variant?: hrVariants;
  thickness?: hrThiknessVariants;
  size?: hrSizeVariants | string;
}

const hrVariantValues = {
  [hrVariants.primary]: 'bg-black',
  [hrVariants.secondary]: 'bg-gray-600',
};

const hrThiknessValues = {
  [hrThiknessVariants.thin]: '2px',
  [hrThiknessVariants.medium]: '4px',
  [hrThiknessVariants.thick]: '10vh',
};

export const Hr = ({
  variant = hrVariants.primary,
  thickness = hrThiknessVariants.thin,
  size = '10px',
}: HrProps) => {
  const className = `${hrVariantValues[variant]} w-[${size}] h-[${hrThiknessValues[thickness]}] rounded-md`;

  return (
    <>
      <div
        className={className}
        style={{ width: size, height: hrThiknessValues[thickness] }}
      ></div>
    </>
  );
};
