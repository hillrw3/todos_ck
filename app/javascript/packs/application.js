/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import ReactDOM from 'react-dom'

export function renderComponent(componentReference) {
  document.addEventListener('DOMContentLoaded', () => {
    let data = {}
    const node = document.getElementById('data')

    if(node) {
      data = JSON.parse(node.getAttribute('data'))
    }

    ReactDOM.render(
      componentReference(data),
      document.querySelector('.container').appendChild(document.createElement('div')),
    )
  })
}