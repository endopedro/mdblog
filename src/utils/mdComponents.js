import ReactPlayer from 'react-player/lazy'

const components = {
  h1({ children }) {
    return <h1 className="text-2xl font-bold mb-3">{children}</h1>
  },
  h2({ children }) {
    return <h2 className="text-xl font-bold mb-3">{children}</h2>
  },
  h3({ children }) {
    return <h3 className="text-lg font-bold mb-3">{children}</h3>
  },
  h4({ children }) {
    return <h4 className="text-base font-bold mb-3">{children}</h4>
  },
  h5({ children }) {
    return <h5 className="text-sm font-bold mb-3">{children}</h5>
  },
  h6({ children }) {
    return <h6 className="text-xs font-bold mb-3">{children}</h6>
  },
  p({ node, children }) {
    if (node.children[0].tagName === 'img') {
      const image = node.children[0].properties
      return (
        <div className="h-80 w-full mb-3">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover rounded shadow"
          />
        </div>
      )
    }
    if (node.children[0].tagName === 'a') {
      const { href, title } = node.children[0].properties
      if (href.includes('youtube')) {
        return (
          <ReactPlayer
            className="mx-auto rounded overflow-hidden shadow"
            url={href}
            controls
          />
        )
      }
      return (
        <a className="underline" target="_blank" href={href}>
          {title}
        </a>
      )
    }
    return <p className="mb-3">{children}</p>
  },
}

export default components
