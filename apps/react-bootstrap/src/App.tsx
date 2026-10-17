import { Container } from "react-bootstrap";
import { ButtonsSection } from "./sections/ButtonsSection";
import { DataSection } from "./sections/DataSection";
import { FeedbackSection } from "./sections/FeedbackSection";
import { FormsSection } from "./sections/FormsSection";
import { LayoutSection } from "./sections/LayoutSection";
import { NavigationSection } from "./sections/NavigationSection";
import { OverlaysSection } from "./sections/OverlaysSection";

export const App = () => (
  <Container className="py-5">
    <h1 className="mb-2">React Bootstrap</h1>
    <p className="text-secondary mb-5">
      Short examples of the components students meet most often.
    </p>
    <LayoutSection />
    <ButtonsSection />
    <FormsSection />
    <OverlaysSection />
    <NavigationSection />
    <FeedbackSection />
    <DataSection />
  </Container>
);
