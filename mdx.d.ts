declare module 'mdx/types' {
    import type { ComponentType, ReactNode } from 'react'
  
    export interface MDXComponents {
      [key: string]: ComponentType<any>
    }
  
    export interface UseMDXComponents {
      (components: MDXComponents): MDXComponents
    }
  }
  