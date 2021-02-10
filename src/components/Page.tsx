import React, { FC, ReactElement } from 'react'
import Header from './Header'
import styled from "styled-components";
import Footer from './Footer';
const BodyWrapper = styled.div`
    background:white;
    width: 100%;
    height: auto;
    flex: 1;
       
`

const PageWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
const Page: FC<{ children: JSX.Element }> = ({ children }) => (
    <PageWrapper>
        <Header />
        <BodyWrapper>
            {children}
        </BodyWrapper>
        <Footer />
    </PageWrapper>
)

export default Page