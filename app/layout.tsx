import Providers from './Providers';

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <html>
      <body>
        <Providers>{props.children}</Providers>
      </body>
    </html>
  );
}
