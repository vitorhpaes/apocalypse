import React from 'react'

// import { Container } from './styles';
interface GifLoaderProps {
  name: 'bolt' | 'homer' | 'lingudo' | 'loading' | 'minecraft'
  width?: number
}

const GifLoader: React.FC<GifLoaderProps> = ({ name, ...props }) => {
  return (
    <img src={require(`../../assets/gifs/${name}.gif`)} alt={name} {...props} />
  )
}

export default GifLoader
