import Heading from "../Heading";

const Challenges = () => {
  return (
    <div className="row-span-2 order-2 md:order-none">
      {/* title */}
      <Heading title={"Learning Through Challenges"} />

      {/* Challenge contents */}
      <div className="text-gray-600 dark:text-neutral-400 space-y-3 mt-3">
        <p>
          The Frnsup newspaper website seeks to elevate its user engagement and
          content accessibility through a Premium Content Access system. This
          system will create distinct user roles—Normal and Premium—allowing
          Premium users exclusive access to high-quality, member-only articles.
          By introducing this tiered structure, Frnsup aims to attract a wider
          audience and incentivize subscriptions.
        </p>
        <p>
          To support Premium memberships, a secure and reliable payment gateway
          will be integrated, enabling users to seamlessly upgrade from Normal
          to Premium status. This payment system should include transaction
          history, current subscription status, and automated reminders for
          renewal, ensuring users are always informed about their membership
          status.
        </p>
        <p>
          An advanced admin dashboard will be created to empower administrators
          with tools to manage the website effectively. This dashboard should
          allow administrators to oversee user accounts, assign or revoke
          Premium membership, and moderate site content. Through these
          functionalities, admins will have control over subscription management
          and content visibility, maintaining a well-organized, dynamic
          platform.
        </p>
        <p>
          A user-friendly UI is essential for this upgrade. The interface should
          be intuitive, with clear navigation and content filtering that
          dynamically displays or restricts content based on the user’s
          membership level. This design should prioritize ease of use for both
          readers and admins, providing a seamless experience that emphasizes
          usability and engagement.
        </p>
      </div>
    </div>
  );
};

Challenges.propTypes = {};

export default Challenges;
