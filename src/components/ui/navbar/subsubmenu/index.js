import React from 'react'
import PropTypes from 'prop-types'
import {SubsubmenuWrap} from './subsubmenu.style'
import {SubmenuWrap} from './../submenu/submenu.style'

export const Subsubmenu = ({children, ...props}) => {
    //return <SubsubmenuWrap {...props}>{children}</SubsubmenuWrap>
    return <SubmenuWrap{...props}>{children}</SubmenuWrap>
}

Subsubmenu.propTypes = {
    children: PropTypes.node.isRequired
}
