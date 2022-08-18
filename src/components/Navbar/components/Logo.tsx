import { ContainerLogoStyled } from "../styled"
import Image from "next/image"


const Logo = () => (
    <ContainerLogoStyled>
        <Image
            src='/logo.png'
            layout="fill"
            alt="Prueba"
        />
    </ContainerLogoStyled>
)

export default Logo
