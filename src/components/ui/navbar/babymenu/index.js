import React from 'react'
import PropTypes from 'prop-types'
import {BabymenuWrap} from './babymenu.style'

export const Babymenu = ({children, ...props}) => {
    return <BabymenuWrap {...props}>{children}</BabymenuWrap>
}

Babymenu.propTypes = {
    children: PropTypes.node.isRequired
}
