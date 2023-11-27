import { StripedBackgroundWhite45 } from "./StripedBackground";

export default function Blog(): JSX.Element {
  return (
    <div className="relative h-full w-screen" id="blog">
      <StripedBackgroundWhite45 />

      <div className="flex h-[600px] flex-wrap items-center justify-center gap-4">
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
    <div className="relative flex h-[500px] w-auto flex-col items-start justify-start gap-2 p-4 text-center hover:bg-slate-100">
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
        <a
          href={props.link}
          className="btn absolute bottom-4 w-[300px] bg-black px-8 py-3 text-base font-medium tracking-wide text-white shadow-xl hover:bg-secondary hover:text-black hover:shadow-none"
        >
          Read more
        </a>
      </div>
    </div>
  );
}
