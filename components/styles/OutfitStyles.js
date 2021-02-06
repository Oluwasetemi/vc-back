import styled from 'styled-components';
import menShoes from '../../public/assets/men_shoes.png';
import pants from '../../public/assets/pants.png';
import shirt from '../../public/assets/shirt.png';
import tie from '../../public/assets/tie.png';

const Wrapper = styled.div`

  .bread-crumbs {
    margin: 30px 0 10px 0;
  }
  .crumbs {
    font-size: 18px;
    line-height: 30px;
    @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
      font-size: 13px;
    }
  }
  h3.title {
    font-weight: 600;
    font-size: 30px;
    line-height: 32px;
    margin: 33px 0;
	color: #4b6962;
	@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
		font-size: 20px;
	  }
  }
  .mt-10{
    margin-top: 10px;
  }
  .text-input{
		max-width: 20%;
		margin-bottom: 23px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			max-width: 45%;		
		  }
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			max-width: 80%;		  }
    }
    
   .user-details .dp {
    width: 70px;
    height: 70px;
    background-color: #9c9b7c;
    border-radius: 50%;
    justify-content: center;
    background-color: #9c9b7c;
    margin-right: 24px;
    .initials {
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      color: #ffffff;
    }
  }
  .paper {
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
	padding: 25px 29px;
	margin-bottom: 50px;
	background-color: #fff;
  }
  .wrap{
	flex-wrap: wrap;
  }
.grid {
  display: grid;
}

 .user-details {
	align-items: flex-end;
    justify-content: space-between;
}
 .user-details>.lhs{
	@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
		flex-wrap: wrap;
	  }
}
  }
   .names .name {
    font-size: 20px;
    line-height: 30px;
    color: #2f3930;
  }
   .names .id {
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    color: #2f3930;
  }
   .names .pink {
    margin-left: 0;
  }
   .user-details .lhs {
 margin-bottom:30px;
 align-items: flex-start;
 @media screen and (max-width: ${props => props.theme.breakpoint.md}) {
	width: 100%;
  }

  }
 .value {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
    	max-width: 32%;
		  @media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
		max-width: 100%;
	  }
  }
  .full-detail {
    grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  margin-top: 24px;
	@media screen and (max-width: ${props => props.theme.breakpoint.md}) {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	  }
  }
  .full-detail .rhs .grid {
    grid-template-columns: 1fr 1fr;
    padding: 11px 0;
    border-bottom: 1px solid #d6d8d3;
  }
  .full-detail .rhs .grid .text {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
  }
  .full-detail .rhs .grid .bold {
    white-space: nowrap;
    justify-self: end;
    font-weight: 600;
  }
  .full-detail .rhs .first {
    border-top: 1px solid #d6d8d3;
  }
  .paper-tail {
	margin: 30px 0 50px 0;

  }

  .paper-tail h1 {
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    color: #2f3930;
  }
  .paper-tail .scroll{
	max-width: 100%;
	overflow-x: scroll;
	overflow-y: hidden;
	&::-webkit-scrollbar {
	  height: .1rem;
	}
	  &::-webkit-scrollbar-thumb {
	  background-color: #F26144;
	  border-radius: 0.5rem;
	}
  }
  .paper-tail .grid {
	display: grid;
	width: 100%;
    min-width: 950px;
    grid-gap: 28px;
    margin: 30px 0;
	grid-template-columns: repeat(auto-fill, minmax(135px, 1fr));
	@media screen and (max-width: ${props => props.theme.breakpoint.sm}) {
		min-width: auto;
				grid-template-columns: repeat(auto-fill,minmax(220px,1fr));
	}
	  }
  }
  .paper-tail>div.flex{
	  justify-content: space-between;
	  .button {
		padding: 0.4rem 2.5rem;
		margin-left: auto;
	  }
  }
  .grid-items .product {
    background-color: #f3f0f0;
    padding: 38px 5px;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    cursor: pointer;
  }
  .grid-items .product:before {
    content: "";
    display: block;
    position: absolute;
    height: 0%;
    left:0;
    width: 100%;
    bottom: 0;
    transition: height 0.5s ease-out;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
  }
  .grid-items .product:hover:before {
    height: 100%;
  }
  .grid-items .image {
	height: 172px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .grid-items .image1 {
    background-image: url(${shirt});
  }
  .grid-items .image2 {
    background-image: url(${pants});
  }
  .grid-items .image3 {
    background-image: url(${menShoes});
  }
  .grid-items .image4 {
    background-image: url(${tie});
  }
  .grid-items .text {
    font-size: 16px;
    line-height: 24px;
    color: #2f3930;
  }
  .grid-items .name {
    font-weight: bold;
    margin: 18px 0 10px 0;
  }
  .absolute{
	  position: absolute;
  }

  .product .checked{
    right: 8px;
    top: 8px;
  }
  .checked .MuiFormControlLabel-root{
    margin-right: 0;
  }
`;

export default Wrapper;
