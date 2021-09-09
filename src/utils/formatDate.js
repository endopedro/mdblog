const formatDate = (date) =>
  new Date(date).toLocaleDateString('en-US', {
    dateStyle: 'long',
  })

export default formatDate
