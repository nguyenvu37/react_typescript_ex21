import React from 'react';

type SeparatorProps = {
  content: string;
};

export const Separator = ({ content }: SeparatorProps) => {
  return (
    <div>
      <p>
        ----------------------------------------------------------------------------
      </p>
      <h3 style={{ color: 'blue' }}>{content}</h3>
    </div>
  );
};
