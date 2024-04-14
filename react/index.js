let element =
  React.createElement(
    // The first argument is the element's `type`
    'a',

    // The second argument is the element's `props`
    { href: 'https://xkcd.com/222/' },

    // Any further arguments, if given, are merged into to
    // `props` under the name `children`.
    React.createElement(
      'img',
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/2/22/Mariah_Carey_Library_of_Congress_2023_1_Cropped_3.png",
        alt: "Singer Mariah Carey",
      }
    ),
    React.createElement(
      'span',
      null,
      'By Mariah Carey',
    )
  )

// Try logging different parts of the `element` object
console.log(element.props.children[0].type)
console.log(element.props.children[1].props.children)

ReactDOM.render(
  element,
  document.getElementById('root')
)