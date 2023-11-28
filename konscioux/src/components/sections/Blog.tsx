export default function Blog(): JSX.Element {
  return (
    <div
      className="stripes-white-45 relative flex h-full w-screen flex-wrap items-center justify-center gap-4 p-10"
      id="blog"
    >
      <BlogPost
        title="Test Post"
        description="This is a test post."
        image="https://s1.r29static.com/bin/entry/0a0/720x725,85/1776807/image.webp"
        link="https://www.gucci.com/"
      />
      <BlogPost
        title="Test Post"
        description="This is a test post."
        image="https://s1.r29static.com/bin/entry/0a0/720x725,85/1776807/image.webp"
        link="https://www.gucci.com/"
      />
      <BlogPost
        title="Test Post"
        description="This is a test post."
        image="https://static.arrajol.com/users/user471296/Screenshot%202023-06-27%20at%202.20.02%20AM.jpg"
        link="https://www.gucci.com/"
      />
    </div>
  );
}

interface BlogPostProps {
  title: string;
  image: string;
  description: string;
  link: string;
}

function BlogPost(props: BlogPostProps): JSX.Element {
  return (
    <div className="relative flex h-[500px] w-auto flex-col items-start justify-start gap-2 bg-slate-50 p-4 text-center hover:bg-slate-100">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={props.image}
        alt="..."
        width={300}
        height={300}
        className="h-[300px] w-[300px] brightness-90"
      />
      <div className="my-2 flex h-full w-full flex-col rounded-lg text-left">
        <h3 className="text-2xl font-semibold uppercase text-black">
          {props.title}
          &nbsp;<span className="text-primary">.</span>
        </h3>
        <p className="mb-2 text-sm font-light text-black">Blog</p>
        <p className="mb-2 w-[300px] text-sm font-light text-black">
          {props.description}
        </p>
        <div className="absolute bottom-4 flex w-[300px] flex-row gap-2">
          <a
            href={props.link}
            className="btn w-3/4 bg-black px-8 py-3 text-center text-base font-normal tracking-wide text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none"
          >
            Read more
          </a>
          <button className="btn w-1/2 bg-black px-8 py-3 text-base font-normal tracking-wide text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none">
            See all
          </button>
        </div>
      </div>
    </div>
  );
}
