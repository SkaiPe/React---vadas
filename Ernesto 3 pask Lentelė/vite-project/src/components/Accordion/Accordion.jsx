// import { useState } from "react";
// import { PALETTE } from "../../shared/theme/constants";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

// const Accordion = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleAccordion = (index) => {
//     setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const getButtonIcon = (index) => {
//     return activeIndex === index ? faAngleUp : faAngleDown;
//   };

//   const getHeaderStyle = (index) => {
//     const isExpanded = activeIndex === index;
//     const isThirdAccordion = index === 2;
//     const hasRoundedCorners = isThirdAccordion && !isExpanded;

//     return {
//       backgroundColor: isExpanded ? "#041b3c" : "#000000",
//       color: isExpanded ? "#ffffff" : "#ffffff",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       width: "100%",
//       border: "1px solid",
//       borderColor: isExpanded ? PALETTE.primary.main : "#ffffff",
//       padding: "1rem",
//       cursor: "pointer",
//       borderTopLeftRadius: index === 0 ? "5px" : 0,
//       borderTopRightRadius: index === 0 ? "5px" : 0,
//       borderBottomLeftRadius: hasRoundedCorners ? "5px" : 0,
//       borderBottomRightRadius: hasRoundedCorners ? "5px" : 0,
//     };
//   };

//   const getBodyStyle = (index) => {
//     const isExpanded = activeIndex === index;
//     const isThirdAccordion = index === 2;
//     const hasRoundedCorners = isThirdAccordion && isExpanded;

//     return {
//       backgroundColor: "#ffffff",
//       color: "#000000 ",
//       maxHeight: isExpanded ? "500px" : "0",
//       transition: "max-height 0.3s ease-in-out",
//       overflow: "hidden",
//       padding: "1rem",
//       borderTop: "1px solid",
//       borderBottomLeftRadius: hasRoundedCorners ? "5px" : 0,
//       borderBottomRightRadius: hasRoundedCorners ? "5px" : 0,
//       borderLeft: "1px solid",
//       borderRight: "1px solid",
//       borderBottom: isExpanded ? "1px solid" : "none",
//       display: isExpanded ? "block" : "none",
//     };
//   };

//   const codeStyle = {
//     color: "#e685b5",
//   };

//   return (
//     <div className="accordion" id="accordionExample">
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className={`accordion-button`}
//             type="button"
//             onClick={() => toggleAccordion(0)}
//             aria-expanded={activeIndex === 0}
//             aria-controls="collapseOne"
//             style={getHeaderStyle(0)}
//           >
//             Accordion Item #1
//             <FontAwesomeIcon
//               icon={getButtonIcon(0)}
//               style={{ transition: "transform 0.3s" }}
//             />
//           </button>
//         </h2>
//         <div
//           id="collapseOne"
//           className={`accordion-collapse`}
//           style={getBodyStyle(0)}
//         >
//           <div className="accordion-body">
//             <strong>This is the first item&apos;s accordion body.</strong> It is
//             shown by default, until the collapse plugin adds the appropriate
//             classes that we use to style each element. These classes control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It&apos;s also worth noting that
//             just about any HTML can go within the{" "}
//             <code style={codeStyle}>.accordion-body</code>, though the
//             transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className={`accordion-button`}
//             type="button"
//             onClick={() => toggleAccordion(1)}
//             aria-expanded={activeIndex === 1}
//             aria-controls="collapseTwo"
//             style={getHeaderStyle(1)}
//           >
//             Accordion Item #2
//             <FontAwesomeIcon
//               icon={getButtonIcon(1)}
//               style={{ transition: "transform 0.3s" }}
//             />
//           </button>
//         </h2>
//         <div
//           id="collapseTwo"
//           className={`accordion-collapse`}
//           style={getBodyStyle(1)}
//         >
//           <div className="accordion-body">
//             <strong>This is the second item&apos;s accordion body.</strong> It
//             is hidden by default, until the collapse plugin adds the appropriate
//             classes that we use to style each element. These classes control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It&apos;s also worth noting that
//             just about any HTML can go within the{" "}
//             <code style={codeStyle}>.accordion-body</code>, though the
//             transition does limit overflow.
//           </div>
//         </div>
//       </div>
//       <div className="accordion-item">
//         <h2 className="accordion-header">
//           <button
//             className={`accordion-button`}
//             type="button"
//             onClick={() => toggleAccordion(2)}
//             aria-expanded={activeIndex === 2}
//             aria-controls="collapseThree"
//             style={getHeaderStyle(2)}
//           >
//             Accordion Item #3
//             <FontAwesomeIcon
//               icon={getButtonIcon(2)}
//               style={{ transition: "transform 0.3s" }}
//             />
//           </button>
//         </h2>
//         <div
//           id="collapseThree"
//           className={`accordion-collapse`}
//           style={getBodyStyle(2)}
//         >
//           <div className="accordion-body">
//             <strong>This is the third item&apos;s accordion body.</strong> It is
//             hidden by default, until the collapse plugin adds the appropriate
//             classes that we use to style each element. These classes control the
//             overall appearance, as well as the showing and hiding via CSS
//             transitions. You can modify any of this with custom CSS or
//             overriding our default variables. It&apos;s also worth noting that
//             just about any HTML can go within the{" "}
//             <code style={codeStyle}>.accordion-body</code>, though the
//             transition does limit overflow.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Accordion;

import { useState } from "react";
import styled from "styled-components";

const AccordionWrapper = styled.div`
  border: 1px solid #ccc;
   margin-bottom: 5px;
  border box: #C2DBFE;
  border-radius: 5px;
  padding: 5px
`;

const AccordionHeader = styled.div`
  border: 1px solid #cfe2ff;
  padding: 10px;
  margin: 1px;
  background-color: ${({ onClick }) => (onClick ? "#CFE2FF" : "#f5f5f5")};
  color: ${({ isClicked }) => (isClicked ? "#CFE2FF" : "#000")};
  cursor: pointer;
`;

const AccordionContent = styled.div`
  padding: 5px;
  margin: 1px;
  border: 2px solid #cfe2ff;
`;

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => toggleAccordion(0)}>
        Accordion Heading #1
      </AccordionHeader>
      {activeIndex === 0 && (
        <AccordionContent>
          <div>
            <strong> This is the first items accordion body.</strong> It is
            shown by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. Its also worth noting that just
            about any HTML can go within the .accordion-body, though the
            transition does limit overflow.
          </div>
        </AccordionContent>
      )}

      <AccordionHeader onClick={() => toggleAccordion(1)}>
        Accordion Heading #2
      </AccordionHeader>
      {activeIndex === 1 && (
        <AccordionContent>
          <div>
            This is the second items accordion body. It is hidden by default,
            until the collapse plugin adds the appropriate classes that we use
            to style each element. These classes control the overall appearance,
            as well as the showing and hiding via CSS transitions. You can
            modify any of this with custom CSS or overriding our default
            variables. Its also worth noting that just about any HTML can go
            within the .accordion-body, though the transition does limit
            overflow.
          </div>
        </AccordionContent>
      )}

      <AccordionHeader onClick={() => toggleAccordion(2)}>
        Accordion Heading #3
      </AccordionHeader>
      {activeIndex === 2 && (
        <AccordionContent>
          This is the third items accordion body. It is hidden by default, until
          the collapse plugin adds the appropriate classes that we use to style
          each element. These classes control the overall appearance, as well as
          the showing and hiding via CSS transitions. You can modify any of this
          with custom CSS or overriding our default variables. Its also worth
          noting that just about any HTML can go within the .accordion-body,
          though the transition does limit overflow.
        </AccordionContent>
      )}
    </AccordionWrapper>
  );
};

export default Accordion;
