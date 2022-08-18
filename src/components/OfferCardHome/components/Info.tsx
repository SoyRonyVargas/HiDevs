import { ContainerInfoStyled } from '../styled'
import type { Post } from '../../../../types'
import Paragraph from 'components/P'
import React from 'react'


const Info = (props: Post) => {

    const { ubication, business } = props

    return (
        <ContainerInfoStyled>

            <ContainerInfoStyled>
                <span className="icon">
                    <i className="fas fa-map-marker-alt"></i>
                </span>

                <Paragraph size='is-small'>
                    {ubication?.name}
                </Paragraph>
            </ContainerInfoStyled>

            <ContainerInfoStyled>
                <span className="icon">
                    <i className="fas fa-building"></i>
                </span>

                <Paragraph size='is-small'>
                    {business?.name}
                </Paragraph>
            </ContainerInfoStyled>

        </ContainerInfoStyled>
    )
}

export default Info
