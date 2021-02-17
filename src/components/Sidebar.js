import React from 'react'
import styled from 'styled-components';
import Compose from './buttons/Compose';
const Sidebar = () => {
    return (
        <Wrapper>
            <ComposeWrapper>

                <Compose/>
            </ComposeWrapper>
            <SideButtonsWrapper>

            </SideButtonsWrapper>
            <MeetWrapper>

            </MeetWrapper>
            <HangoutsWrapper>

            </HangoutsWrapper>
            <BottomWrapper>

            </BottomWrapper>
        </Wrapper>
    )
}

export default Sidebar
const Wrapper = styled.div`
`
const ComposeWrapper = styled.div`
`
const SideButtonsWrapper = styled.div`
`
const HangoutsWrapper = styled.div`
`
const MeetWrapper = styled.div`
`
const BottomWrapper = styled.div`
`