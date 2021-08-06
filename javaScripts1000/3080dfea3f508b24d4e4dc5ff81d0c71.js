const svgSource = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 5C0 2.23858 2.23858 0 5 0H19C21.7614 0 24 2.23858 24 5V19C24 21.7614 21.7614 24 19 24H5C2.23858 24 0 21.7614 0 19V5Z" fill="var(--coilButton-color)"/><path d="M16.2587 14.8242C16.5793 14.8242 16.9975 14.9868 17.2903 15.6781C17.3321 15.773 17.36 15.8815 17.36 15.9763C17.36 17.1149 14.6973 18.1451 13.1498 18.2264C13.0383 18.2264 12.9128 18.24 12.8013 18.24C10.5011 18.24 8.36809 17.0472 7.26675 15.1224C6.75094 14.2142 6.5 13.2112 6.5 12.1946C6.5 11.0153 6.84852 9.83601 7.53163 8.8194C8.06139 8.00611 9.09302 6.93528 10.9053 6.35243C11.3654 6.20332 12.174 6 13.0941 6C13.9863 6 14.9761 6.18977 15.8404 6.82684C17.0533 7.70791 17.3042 8.6703 17.3042 9.29382C17.3042 9.56492 17.2624 9.76824 17.2206 9.89023C16.9418 10.8797 16.0077 11.6388 14.9203 11.7879C14.6694 11.815 14.4603 11.8421 14.2651 11.8421C13.2753 11.8421 12.9407 11.4355 12.9407 10.9746C12.9407 10.3511 13.5402 9.61914 13.9723 9.61914C14.0281 9.61914 14.0839 9.63269 14.1257 9.6598C14.2372 9.72757 14.3766 9.75468 14.5021 9.75468C14.5439 9.75468 14.5718 9.75468 14.6136 9.74113C14.9622 9.70046 15.1434 9.47003 15.1434 9.18538C15.1434 8.65674 14.5021 7.93834 13.108 7.93834C12.6619 7.93834 12.1461 8.00611 11.5606 8.18233C10.3338 8.54831 9.65065 9.40226 9.30213 9.9309C8.84208 10.6086 8.61902 11.3948 8.61902 12.1674C8.61902 12.8316 8.78632 13.4958 9.1209 14.0922C9.84583 15.3528 11.2678 16.139 12.8013 16.139C12.885 16.139 12.9547 16.139 13.0383 16.139C15.0319 16.0306 15.4919 15.0546 15.938 14.8648C16.0077 14.8513 16.1332 14.8242 16.2587 14.8242Z" fill="var(--coilButton-bg-color)"/></svg>`
const cssSource = `
.coilButton {
	display: inline-flex;
  align-items: center;
	cursor:pointer;
	font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
  line-height: 1.2;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	text-decoration:none;
  background-color:var(--coilButton-bg-color);
  border:1px solid var(--coilButton-border);
  color:var(--coilButton-color);
}
.coilThemeDark {
  --coilButton-bg-color: #000000;
  --coilButton-color: #ffffff;
  --coilButton-border: #636975;
  --coilBotton-hover: #2D333A;
}
.coilThemeLight {
  --coilButton-bg-color: #ffffff;
  --coilButton-color: #2D333A;
  --coilButton-border: #E3E5E9;
  --coilBotton-hover: #F8F8F8;
}
.coilSizeLarge {
 	border-radius:8px;
  font-size: 15px;
  padding: 8px;
}
.coilSizeSmall {
  border-radius:4px;
  font-size: 12px;
  padding: 7px;
}
.coilButton:hover {
	background-color:var(--coilBotton-hover);
}
.coilButton:active {
	position:relative;
	top:1px;
}
.coilSizeLarge > svg {
  width: 24px;
  height: 24px;
  margin-right: 8px;
}
.coilSizeSmall > svg {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
`

const coilUrl = 'https://coil.com'

const instantiateButton = ({
  small,
  light,
  name,
  ref
}) => {
  const a = document.createElement('a')

  if (ref) {
    const customCoilLink = new URL(coilUrl)
    customCoilLink.search = new URLSearchParams({ ref })
    a.href = customCoilLink.href
  } else {
    a.href = coilUrl
  }

  a.target = '_blank'

  a.classList.add('coilButton')
  a.classList.add(small ? 'coilSizeSmall' : 'coilSizeLarge')
  a.classList.add(light ? 'coilThemeLight' : 'coilThemeDark')

  a.innerHTML = svgSource

  const message = document.createElement('span')
  message.classList.add('coil-support-button-text')
  message.innerText = `Support ${name || 'me'} with Coil`

  a.appendChild(message)

  return a
}

const isSmall = (elem) => elem.getAttribute('data-size') === 'small'
const isLight = (elem) => elem.getAttribute('data-theme') === 'light'
const getName = (elem) => elem.getAttribute('data-name')
const getRef  = (elem) => elem.getAttribute('data-ref')

const injectButton = (elem) => {
  elem.appendChild(instantiateButton({
    small: isSmall(elem),
    light: isLight(elem),
    name: getName(elem),
    ref: getRef(elem)
  }))
}

const injectAllButtons = () => {
  Array.from(document.body.querySelectorAll('.coil-support-button'))
    .forEach(injectButton)
}

const injectStyles = () => {
  const style = document.createElement('style')
  style.innerHTML = cssSource
  document.head.appendChild(style)
}

window.addEventListener('DOMContentLoaded', () => {
  injectStyles()
  injectAllButtons()
})
