import React from 'react'
import PropTypes from 'prop-types'
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import styled from "styled-components";


const Wrapper = styled.div`
margin: 30px 0 10px 0;
.crumbs{
  font-size: 18px;
line-height: 30px;
}
`
function Crumbs({Calendar, calendarColor, homeColor,href, text}) {
	return (
		<Wrapper>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link className='crumbs' color={homeColor} href="/dashboard" >
          Home
        </Link>
        <Link className='crumbs' color={calendarColor} href="/calendar" >
          {Calendar}
        </Link>
        <Link className='crumbs' color="textPrimary" href={href} >
        {text}
        </Link>
       
      </Breadcrumbs>
		</Wrapper>
	)
}

Crumbs.propTypes = {
  Calendar: PropTypes.string,
  calendarColor: PropTypes.string,
  homeColor: PropTypes.string,
  href: PropTypes.string,
  text: PropTypes.string,
}

export default Crumbs

