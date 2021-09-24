export default {
  title: 'MDBlog',
  description: 'A serverless blog experiment to integrate with mdblog-cms API.',
  openGraph: {
    title: 'MDBlog',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    site_name: 'MDBlog',
    description:
      'A serverless blog experiment to integrate with mdblog-cms API.',
    images: [{ url: `${process.env.NEXT_PUBLIC_SITE_URL}/logo.png` }],
  },
}
