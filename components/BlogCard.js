export default function BlogCard({ blogData }) {
  const { title, description, imageLink, externalLink } = blogData;

  return (
    <a href={externalLink} target="_blank">
      <div className="bg-white border border-gray-300 shadow-md transition-transform hover:-translate-y-1 hover:transform hover:shadow-lg rounded-lg">
        {/* <Image
          loader={() => imageLink}
          unoptimized={true}
          fill={true}
          src={imageLink}
          alt={"careers-img-2"}
        /> */}

        <img
          className="mx-auto rounded-t-lg aspect-video object-contain bg-gray-200"
          src={imageLink}
          alt="blog-image"
        />
        <div className="p-4">
          <h5 className="mb-2 truncate text-2xl font-bold tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="line-clamp-3 font-normal text-gray-700 ">{description}</p>
        </div>
      </div>
    </a>
  );
}
