import React, { useState } from "react";

import {
  EuiButtonEmpty,
  EuiCard,
  EuiIcon,
  EuiFlexGroup,
  EuiFlexItem,
  EuiText,
  EuiHorizontalRule,
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
  EuiToolTip,
} from "@elastic/eui";

export default () => {
  const [card1Selected, setCard1] = useState(true);
  const [card2Selected, setCard2] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const card1Clicked = () => {
    setCard1(!card1Selected);
    setSelectedService("Sketch");
  };

  const card2Clicked = () => {
    setCard2(!card2Selected);
    setSelectedService("Google");
  };

  const detailsClicked = (e) => {
    e.stopPropagation();
    console.log("Details clicked");
  };

  return (
    <EuiPage>
      <EuiPageBody component="div">
        <EuiPageContent>
          <EuiPageContentHeader>
            <EuiPageContentHeaderSection>
              <EuiTitle>
                <h2>Choose your service</h2>
              </EuiTitle>
              <EuiFlexGroup gutterSize="l">
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon size="xxl" type="logoSketch" />}
                    title="Sketch"
                    description="Example of a short card description."
                    footer={
                      <EuiButtonEmpty
                        iconType="iInCircle"
                        size="xs"
                        onClick={detailsClicked}
                        aria-label="See more details about Sketch"
                      >
                        More details
                      </EuiButtonEmpty>
                    }
                    selectable={{
                      onClick: card1Clicked,
                      isSelected: card1Selected,
                    }}
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon size="xxl" type="logoGCP" />}
                    title="Google"
                    description="Example of a longer card description. See how the footers stay lined up."
                    footer={
                      <EuiButtonEmpty
                        iconType="iInCircle"
                        size="xs"
                        onClick={detailsClicked}
                        aria-label="See more details about Google"
                      >
                        More details
                      </EuiButtonEmpty>
                    }
                    selectable={{
                      onClick: card2Clicked,
                      isSelected: card2Selected,
                    }}
                  />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiCard
                    icon={<EuiIcon size="xxl" type="logoAerospike" />}
                    title="Not Adobe"
                    description="Example of a short card description."
                    footer={
                      <EuiButtonEmpty
                        iconType="iInCircle"
                        size="xs"
                        onClick={detailsClicked}
                        aria-label="See more details about Not Adobe"
                      >
                        More details
                      </EuiButtonEmpty>
                    }
                    selectable={{
                      onClick: () => {},
                      isDisabled: true,
                    }}
                  />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPageContentHeaderSection>
          </EuiPageContentHeader>
          <EuiPageContentBody>
            Selected service: {selectedService}
          </EuiPageContentBody>
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
};
