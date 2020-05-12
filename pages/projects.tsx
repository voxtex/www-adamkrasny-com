import React from "react";

const Projects = () => {
  return (
    <div>
      <p>
        <b>
          Unfortunately all of these projects are now unmaintained. Primarily due to time, but also due to cost and lost
          interest.
        </b>
      </p>
      <h2 className="mt-6">Smite Repository</h2>
      <p>
        A side project built to help me play Smite. Provides real-time statistics to hundreds of players a day.
        It&apos;s written in Ruby using Grape with MongoDB for data storage.
      </p>
      <h2 className="mt-6">Reddit Account Age</h2>
      <p>
        A simple Chrome extension built to familiarize myself with the APIs. It would inject a script onto the Reddit
        that would scan all usernames and insert a small indicator of the age of each user&apos;s account.
      </p>
      <h2 className="mt-6">Fantasy Tiers</h2>
      <p>
        A small website to help with Fantasy Football player selection. A series of charts and tables to show rankings
        and priorities.
      </p>
    </div>
  );
};

export default Projects;
