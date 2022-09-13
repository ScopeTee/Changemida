import styled from 'styled-components'
import Image from 'react-bootstrap/Image'


export const Logo = styled(Image)`
`

export const Img = styled(Image)`
    border-radius: ${props => props.radius ? "32px 0 0 0 " : "0"}
    .overlay {
        border: 2px solid red;
    }
`

