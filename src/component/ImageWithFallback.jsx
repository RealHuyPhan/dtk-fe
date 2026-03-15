import React, { useState } from 'react';
import { Box } from '@mui/material';
import NotFound from '../assets/NotFound.png';

const ERROR_IMG_SRC = NotFound;

export function ImageWithFallback(props) {
  const [didError, setDidError] = useState(false);

  const handleError = () => {
    setDidError(true);
  };

  const { src, alt, style, className, ...rest } = props;

  return didError ? (
    <Box
      className={className}
      style={style}
      sx={{
        display: 'inline-block',
        bgcolor: 'grey.100', // Tương đương bg-gray-100
        textAlign: 'center',
        verticalAlign: 'middle',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
      </Box>
    </Box>
  ) : (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  );
}