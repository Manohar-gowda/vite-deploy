import React from 'react'

const Instructions = () => {
  return (
    <div className="text-xl text-white space-y-10 p-8 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg">
  <h1 className="text-4xl underline decoration-orange-500 font-extrabold text-center text-orange-400 mb-6">
    Instructions to Follow
  </h1>
  <ul className="space-y-8 list-disc list-inside">
    <li>
      <p className="text-lg leading-relaxed">
        This is a React library project with Tailwind CSS styling. For storing
        data, a `.json` database is used locally.
      </p>
    </li>
    <li>
      <p className="text-lg leading-relaxed">
        You may select operations from the left side of the project or by
        clicking on the "Operations" button in the navbar.
      </p>
    </li>
    <li>
      <p className="text-lg leading-relaxed">
        <strong>Display Users</strong> only shows all users in the database.
      </p>
    </li>
    <li>
      <p className="text-lg leading-relaxed">
        <strong>Edit Users</strong> allows the admin to change user
        information.
      </p>
    </li>
    <li>
      <p className="text-lg leading-relaxed">
        <strong>Role Management</strong> allows the admin to change user roles
        and manage permissions for reading, writing, and deleting.
      </p>
    </li>
  </ul>
</div>

  )
}

export default Instructions