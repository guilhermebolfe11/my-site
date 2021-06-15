interface ITech {
  title: string;
  href: string;
  icon: JSX.Element;
}

export default interface IStack {
  title: string;
  techs: ITech[];
}
