import Link from 'next/link'

type ButtonProps = {
  type?: string;
  children?: React.ReactNode;
  className? : string;
  link : string;
};

export const Button = (props: ButtonProps) => {

  return (
    //indexからcssを検索して当てる
    <Link href={props.link}  className={props.className}>
      {props.children}
    </Link>
  );

};
