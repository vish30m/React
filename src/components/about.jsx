import { Typography } from "@mui/material";
import React, { Component } from "react";
class About extends React.Component {
  render() {
    return (
      <div>
        <Typography align="center" variant="h4" className="mt-1">
          About
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          Resolver is a free online tool which assists consumers in raising and
          resolving issues. Resolver acts as a bridge between the consumer and
          the business, championing better outcomes for the parties involved.
        </Typography>
        <Typography align="center" variant="h4">
          We make complaining easy- for free
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          It is indeed challenging to get heard amongst 1.3 billion people. The
          never-ending queues, hours of waiting on the phone, gruelling issue
          escalation methods, add to the tedious process of filing a complaint.
          Defying traditional complaint redressal mechanisms, Resolver
          simplifies consumer rights and provides guidance for filing consumer
          complaints. Resolver's system makes recommendations on escalation
          steps and when to take them, connecting the complainant with the right
          people and/or key industry regulators and ombudsmen. Resolver also
          helps consumers keep track of their complaint and stores all relevant
          information securely in one place for easy access.
        </Typography>
        <Typography align="center" variant="h4">
          Our ethics
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          Resolver has been built by consumers, for consumers. We only treat you
          how we would like to be treated ourselves. Rest assured, you’re in
          good hands! We do not display adverts, we do not sell or give your
          personal data to anyone except the company you have an issue with or
          with the escalating authority. We will never sell you anything. We
          make sure that your complaint gets resolved free of cost, in the most
          effective way.
        </Typography>
        <Typography align="center" variant="h4">
          Our history
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          Originally started by James Walker in the UK, Resolver launched in
          India in 2019 under the control of Pratyush Singh. Back in 2012, after
          an energy company ignored a complaint of his, James realised that
          complaining was complex, hard work and that there was no service that
          proactively helped consumers resolve their issues. This was the
          beginning of Resolver, and since then we have internationally
          addressed over 3 million consumer grievances.
        </Typography>
        <Typography align="center" variant="h4">
          Who we work with
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          We’ve built our system with comprehensive research into correct
          complaint procedures of different companies and industries. We
          regularly consult with key industry regulators, ombudsmen, government
          departments, private consumer care departments and consumer rights
          organisations to serve you better. Resolver database is ever evolving
          in order to ensure that every consumer gets the best experience.
        </Typography>
        <Typography align="center" variant="h4">
          Being fair to businesses
        </Typography>
        <Typography align="center" className="ms-5 mr-5 mb-5 mt-1">
          Resolver does not choose sides in the Indian market. We understand how
          businesses wish to provide the best to their customers. So we are
          focused on helping them understand and resolve consumer issues
          promptly and privately. Our aim is to create a win-win situation for
          both parties. We ensure that customers are happy with the outcome and
          want to remain loyal to the organisation. Resolver customer
          satisfaction scores are based on the feedback given by Resolver users
          at the point of case resolution. Only companies with more than 50
          cases are included in these published data sets.
        </Typography>
      </div>
    );
  }
}

export default About;
