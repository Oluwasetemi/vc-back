import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
.paper{
	padding: 20px;
	box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
border-radius: 10px;
min-height: 195px;
.title{
	font-weight: 600;
font-size: 16px;
line-height: 24px;
color: #4B6962;
}
.value{
	font-weight: 600;
font-size: 30px;
line-height: 32px;
color: #2F3930;
margin: 14px 0;
}
.info{
	font-weight: normal;
font-size: 12px;
line-height: 16px;
color: #4B6962;
margin-bottom: 22px;
}
}
`
function SmallCardPaper({title,value,info,link}) {
	return (
		<Wrapper>
			<Paper className="paper">
				<p className="title">{title}</p>
				<p className="value">{value}</p>
	<p className="info">{info}</p>
				{link}
			</Paper>
		</Wrapper>
	)
}



SmallCardPaper.propTypes = {
title: PropTypes.string.isRequired,
value: PropTypes.string.isRequired,
info: PropTypes.string.isRequired,
link: PropTypes.any,
}

export default SmallCardPaper

