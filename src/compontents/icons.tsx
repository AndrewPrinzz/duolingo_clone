/** @jsxImportSource @emotion/react */
import {jsx} from '@emotion/react'
import type {Interpolation} from '@emotion/core'

import {ComponentPropsWithoutRef} from 'react'



type IconProps = ComponentPropsWithoutRef<'div'> & {
  customCss?: Interpolation;
  width?: 47 | number;
};

function StarIcon({customCss, width = 47, ...props}: IconProps) {
  return (
    <div {...props} css={{...customCss}}>
      <svg css={{width: `${width}px`}} width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M46.5024 19.5306C46.5024 19.9957 46.2606 20.4609 45.777 20.9259L35.6325 30.6913L38.0343 44.8745C38.0529 44.8745 38.0623 45.1072 38.0623 45.3397C38.0623 45.8047 37.9599 46.037 37.7553 46.2695C37.5693 46.502 37.2903 46.7347 36.916 46.7347C36.5625 46.7347 36.1905 46.7348 35.7999 46.5023L23.2512 39.7594L10.7035 46.5023C10.2935 46.7348 9.92083 46.7347 9.58555 46.7347C9.19423 46.7347 8.89615 46.502 8.69131 46.2695C8.50483 46.037 8.41183 45.8047 8.41183 45.3397C8.41183 45.3397 8.43043 45.107 8.46763 44.8745L10.8711 30.6913L0.698699 20.9259C0.232977 20.4609 0 19.9957 0 19.5306C0 18.8331 0.521757 18.3681 1.56504 18.3681L15.5939 16.2757L21.8817 3.48751C22.2351 2.78998 22.6932 2.32495 23.2512 2.32495C23.8093 2.32495 24.2673 2.78998 24.6207 3.48751L30.9078 16.2757L44.9376 18.3681C45.9816 18.3681 46.5024 18.8331 46.5024 19.5306Z" fill="#E67E22"/>
        <path d="M46.5024 17.2057C46.5024 17.6707 46.2606 18.136 45.777 18.601L35.6325 28.3664L38.0343 42.5496C38.0529 42.5496 38.0623 42.7822 38.0623 43.0148C38.0623 43.4798 37.9599 43.7121 37.7553 43.9446C37.5693 44.1771 37.2903 44.4098 36.916 44.4098C36.5625 44.4098 36.1905 44.4098 35.7999 44.1773L23.2512 37.4344L10.7035 44.1773C10.2935 44.4098 9.92083 44.4098 9.58555 44.4098C9.19423 44.4098 8.89615 44.1771 8.69131 43.9446C8.50483 43.7121 8.41183 43.4798 8.41183 43.0148C8.41183 43.0148 8.43043 42.7821 8.46763 42.5496L10.8711 28.3664L0.698699 18.601C0.232977 18.136 0 17.6707 0 17.2057C0 16.5081 0.521757 16.0431 1.56504 16.0431L15.5939 13.9507L21.8817 1.16256C22.2351 0.465024 22.6932 0 23.2512 0C23.8093 0 24.2673 0.465024 24.6207 1.16256L30.9078 13.9507L44.9376 16.0431C45.9816 16.0431 46.5024 16.5081 46.5024 17.2057Z" fill="#F1C40F"/>
      </svg>
    </div>
  )
}

export {StarIcon}