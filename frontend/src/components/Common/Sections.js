import { useState } from 'react';

export const Sections = ({ sections, defaultSection }) => {
  const [activeSectionName, setActiveSectionName] = useState(defaultSection);

  const activeSection = sections.filter(
    (section) => section.name === activeSectionName
  )[0];

  const ActiveElement = activeSection.element;

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-300 my-3">
        {sections
          .filter((section) => section.show)
          .map((section) => (
            <button
              key={section.name}
              className={`mr-4 p-2 text-lg hover:bg-gray-300 rounded text-gray-600 ${
                activeSectionName === section.name
                  ? 'font-bold border-b-2 border-sky-600'
                  : 'font-medium'
              } `}
              onClick={() => setActiveSectionName(section.name)}
            >
              {section.name}
            </button>
          ))}
      </div>
      <ActiveElement {...activeSection.props} />
    </div>
  );
};

