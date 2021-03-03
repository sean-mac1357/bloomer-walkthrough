import {
  Title,
  Card,
  CardHeader,
  CardContent,
  CardImage,
  Content,
  Media,
  Image,
  MediaLeft
} from "bloomer";
import "bulma/css/bulma.css";

export default function App() {
  return (
    <div className="App">
      <Card>
        <CardHeader>
          <Title isSize={1}>Hello CodeSandbox</Title>
          <Title isSize={2} tag="h2">
            Start editing to see some magic happen!
          </Title>
        </CardHeader>
        <CardContent>
          <CardImage>
            <Image isRatio="4:3" src="https://via.placeholder.com/1280x960" />
          </CardImage>
          <Content>
            Lorem Ipsum Dolar Site Amet jklk;lkdlkjalkdjf;lksdjdjlfkag;h
          </Content>
        </CardContent>
      </Card>
    </div>
  );
}
