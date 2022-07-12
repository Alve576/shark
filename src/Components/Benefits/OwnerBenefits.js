import React from "react";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import ReactTooltip from "react-tooltip";

const Wrapper = styled.div`
  .title {
    font-size: 3.75rem;
    text-align:center;
    font-style: italic;
  }

  @media only screen and (max-width: 991px) {
    .title {
      font-size: 2.75rem;
    }
  }
  @media only screen and (max-width: 420px) {
    .title {
      font-size: 2.25rem;
    }
  }
`;


const events = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Sharks grant owners access to exciting live events. Events will aim to
    positively impact your performance, while the primary focus will always be
    GREAT FUN.
  </Tooltip>
);
const giveaways = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Regular giveaways will aim to provide high utility to the poker player. Such
    may include anything from tournament buy-ins to merchandise, training
    materials, tools, or private coaching.
  </Tooltip>
);
const freerolls = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Direct qualifier tournaments and leaderboards will determine entrants and
    winners for limited events and giveaways. Check our website and social
    media channels for which events you need to qualify and which are open to
    all owners.
  </Tooltip>
);
const carbon = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    The Poker Shark Society project will launch on Immutable X, which means
    zero gas fees, instant trades, and carbon-neutral NFTs.
  </Tooltip>
);
const reserve = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    Half of the revenue from the mint sale will function as the community
    reserve, which will only be staked/lent for rewards/interest. All revenue
    generated from staking/lending will go to the community fund. If the
    community fund depletes, benefits will cease until funded sufficiently
    through royalty and staking/lending revenue.
  </Tooltip>
);
const community = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    The Poker Shark Society is a poker community project from players for
    players. The vision is to bring together like-minded people to share great
    experiences while working towards improving performance.
  </Tooltip>
);


const OwnerBenefits = () => {
    
  return (
    <Wrapper id="benefits" className="benefits py-5">
      <Col xs={11} xxl={8} className="mx-auto">
        <Row className="align-items-center">
          <Col
            md={12}
            className="d-flex justify-content-center my-md-0"
            data-aos="fade-left"
          >
            <div className=" d-flex w-100 d-lg-block justify-content-center align-items-center align flex-column">
            <h2 className="title py-4 pb-3 pb-md-5">OWNER <span className="exlamation">BENEFITS</span></h2>

            <Row>
      
                  <OverlayTrigger
                    placement="left"
                    mouseTrail="true"
                    delay={{ show: 350, hide: 500 }}
                    overlay={events}
                  >
                    <Col xs={12} s={12} md={6} lg={4} data-tip data-for='happyFace'>
                        <div className="benefits-box">
                          <img src="./images/event_icon.svg" className="w-50" alt="#" />
                          <h3>LIVE EVENTS</h3>
                        </div>
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="top"
                    delay={{ show: 350, hide: 500 }}
                    overlay={giveaways}
                  >
                    <Col xs={12} s={12} md={6} lg={4}>
                        <div className="benefits-box">
                          <img src="./images/giveaway_icon.svg" className="w-50" alt="#" />
                          <h3>GIVEAWAYS</h3>
                        </div>
                    </Col>
                  </OverlayTrigger>
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 350, hide: 500 }}
                    overlay={freerolls}
                  >  
                    <Col xs={12} s={12} md={6} lg={4}>
                        <div className="benefits-box">
                          <img src="./images/carbon_neutral.svg" className="w-50" alt="#" />
                          <h3>FREEROLLS & LEADERBOARDS</h3>
                        </div>
                    </Col>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="left"
                    delay={{ show: 350, hide: 500 }}
                    overlay={freerolls}
                  >
                <Col xs={12} s={12} md={6} lg={4}>
                    <div className="benefits-box">
                      <img src="./images/carbon_neutral.svg" className="w-50" alt="#" />
                      <h3>CARBON NEUTRAL & NO GAS FEES</h3>
                    </div>
                </Col>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 350, hide: 500 }}
                    overlay={reserve}
                  >
                    <Col xs={12} s={12} md={6} lg={4}>
                        <div className="benefits-box">
                          <img src="./images/reserve_icon.svg" className="w-50" alt="#" />
                          <h3>RESERVE SYSTEM</h3>
                        </div>
                    </Col>
                </OverlayTrigger>
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 350, hide: 500 }}
                    overlay={community}
                  >
                    <Col xs={12} s={12} md={6} lg={4}>
                        <div className="benefits-box">
                          <img src="./images/community_icon.svg" className="w-50" alt="#" />
                          <h3>COMMUNITY</h3>
                        </div>
                    </Col>
                </OverlayTrigger>
            </Row>
            </div>
          </Col>
        </Row>
      </Col>
    </Wrapper>
  );
};
export default OwnerBenefits;