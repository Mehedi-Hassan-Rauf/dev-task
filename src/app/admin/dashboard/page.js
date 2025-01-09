"use client";
import { useState, useEffect } from "react";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("banner");
  const [content, setContent] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editingContent, setEditingContent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  // Fetch content on component mount
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setIsLoading(true);
      const [bannerRes, workRes, testimonialRes] = await Promise.all([
        fetch("/api/content/banner"),
        fetch("/api/content/work"),
        fetch("/api/content/testimonials"),
      ]);

      const [bannerData, workData, testimonialData] = await Promise.all([
        bannerRes.json(),
        workRes.json(),
        testimonialRes.json(),
      ]);

      setContent({
        banner: bannerData.content,
        work: workData.content,
        testimonials: testimonialData.content,
      });
      setError(null);
    } catch (err) {
      setError("Failed to load content");
      console.error("Error fetching content:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSectionChange = (section) => {
    if (isEditing) {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to switch sections?"
        )
      ) {
        setIsEditing(false);
        setEditingContent(null);
        setActiveSection(section);
      }
    } else {
      setActiveSection(section);
    }
  };

  const handleEdit = (section) => {
    setIsEditing(true);
    setEditingContent({ ...content[section] });
    setActiveSection(section);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditingContent(null);
  };

  const handleSave = async () => {
    try {
      setIsSaving(true);
      const response = await fetch(`/api/content/${activeSection}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: editingContent,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save changes");
      }

      setContent({
        ...content,
        [activeSection]: editingContent,
      });
      setIsEditing(false);
      setEditingContent(null);
      setError(null);
    } catch (err) {
      setError("Failed to save changes");
      console.error("Error saving content:", err);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl text-red-600">{error}</div>
      </div>
    );
  }

  const renderWorkSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Case Studies</h3>
        <button
          onClick={() => handleEdit("work")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add New Case
        </button>
      </div>

      {editingContent?.cases?.map((caseItem, index) => (
        <div key={index} className="border rounded-lg p-6 bg-gray-50">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Case Study #{index + 1}</h4>
            <button
              onClick={() => handleEdit("work")}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                value={caseItem.title}
                onChange={(e) => {
                  const newCases = [...editingContent.cases];
                  newCases[index].title = e.target.value;
                  setEditingContent({ ...editingContent, cases: newCases });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Image Path
              </label>
              <input
                type="text"
                value={caseItem.image}
                onChange={(e) => {
                  const newCases = [...editingContent.cases];
                  newCases[index].image = e.target.value;
                  setEditingContent({ ...editingContent, cases: newCases });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Link
              </label>
              <input
                type="text"
                value={caseItem.link}
                onChange={(e) => {
                  const newCases = [...editingContent.cases];
                  newCases[index].link = e.target.value;
                  setEditingContent({ ...editingContent, cases: newCases });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={caseItem.isLatest}
                onChange={(e) => {
                  const newCases = [...editingContent?.cases];
                  newCases[index].isLatest = e.target.checked;
                  setEditingContent({ ...editingContent, cases: newCases });
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label className="ml-2 block text-sm text-gray-700">
                Mark as Latest
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Tags (comma-separated)
              </label>
              <input
                type="text"
                value={caseItem.tags.join(", ")}
                onChange={(e) => {
                  const newCases = [...editingContent?.cases];
                  newCases[index].tags = e.target.value
                    .split(",")
                    .map((tag) => tag.trim());
                  setEditingContent({ ...editingContent, cases: newCases });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderTestimonialsSection = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Testimonials</h3>
        <button
          onClick={() => handleEdit("testimonials")}
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          Add New Testimonial
        </button>
      </div>

      {editingContent?.items?.map((testimonial, index) => (
        <div key={index} className="border rounded-lg p-6 bg-gray-50">
          <div className="flex justify-between items-start mb-4">
            <h4 className="font-medium">Testimonial #{index + 1}</h4>
            <button
              onClick={() => handleEdit("testimonials")}
              className="text-red-600 hover:text-red-700"
            >
              Delete
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Quote
              </label>
              <textarea
                value={testimonial.quote}
                onChange={(e) => {
                  const newItems = [...editingContent.items];
                  newItems[index].quote = e.target.value;
                  setEditingContent({ ...editingContent, items: newItems });
                }}
                rows="3"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                type="text"
                value={testimonial.author}
                onChange={(e) => {
                  const newItems = [...editingContent.items];
                  newItems[index].author = e.target.value;
                  setEditingContent({ ...editingContent, items: newItems });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                value={testimonial.company}
                onChange={(e) => {
                  const newItems = [...editingContent.items];
                  newItems[index].company = e.target.value;
                  setEditingContent({ ...editingContent, items: newItems });
                }}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderBannerSection = () => (
    <div className="space-y-6">
      {/* Hero Title */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Hero Title</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Word
            </label>
            <input
              type="text"
              value={editingContent.heroTitle.firstLine.word1}
              onChange={(e) => {
                setEditingContent({
                  ...editingContent,
                  heroTitle: {
                    ...editingContent.heroTitle,
                    firstLine: {
                      ...editingContent.heroTitle.firstLine,
                      word1: e.target.value,
                    },
                  },
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Second Word
            </label>
            <input
              type="text"
              value={editingContent.heroTitle.firstLine.word2}
              onChange={(e) => {
                setEditingContent({
                  ...editingContent,
                  heroTitle: {
                    ...editingContent.heroTitle,
                    firstLine: {
                      ...editingContent.heroTitle.firstLine,
                      word2: e.target.value,
                    },
                  },
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Second Line
          </label>
          <input
            type="text"
            value={editingContent.heroTitle.secondLine}
            onChange={(e) => {
              setEditingContent({
                ...editingContent,
                heroTitle: {
                  ...editingContent.heroTitle,
                  secondLine: e.target.value,
                },
              });
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Stats</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Number
            </label>
            <input
              type="text"
              value={editingContent.stats.number}
              onChange={(e) => {
                setEditingContent({
                  ...editingContent,
                  stats: {
                    ...editingContent.stats,
                    number: e.target.value,
                  },
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Text
            </label>
            <input
              type="text"
              value={editingContent.stats.text}
              onChange={(e) => {
                setEditingContent({
                  ...editingContent,
                  stats: {
                    ...editingContent.stats,
                    text: e.target.value,
                  },
                });
              }}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Description</h3>
        <textarea
          value={editingContent.description}
          onChange={(e) => {
            setEditingContent({
              ...editingContent,
              description: e.target.value,
            });
          }}
          rows="3"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      </div>

      {/* Button */}
      <div className="border rounded-lg p-6 bg-gray-50">
        <h3 className="font-medium mb-4">Button</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Button Text
          </label>
          <input
            type="text"
            value={editingContent.button.text}
            onChange={(e) => {
              setEditingContent({
                ...editingContent,
                button: {
                  ...editingContent.button,
                  text: e.target.value,
                },
              });
            }}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    if (!isEditing) {
      return (
        <pre className="bg-gray-50 p-4 rounded-lg overflow-auto">
          {JSON.stringify(content[activeSection], null, 2)}
        </pre>
      );
    }

    switch (activeSection) {
      case "work":
        return renderWorkSection();
      case "testimonials":
        return renderTestimonialsSection();
      case "banner":
        return renderBannerSection();
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Content Management
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* Add error message display */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-md">
            {error}
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-lg shadow p-4">
            <nav className="space-y-2">
              {Object.keys(content).map((section) => (
                <button
                  key={section}
                  onClick={() => handleSectionChange(section)}
                  className={`w-full px-4 py-2 text-left rounded-md ${
                    activeSection === section
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)} Section
                </button>
              ))}
            </nav>
          </div>

          {/* Content Area */}
          <div className="flex-1 bg-white rounded-lg shadow">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {activeSection.charAt(0).toUpperCase() +
                    activeSection.slice(1)}{" "}
                  Section
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => handleEdit(activeSection)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Edit Content
                  </button>
                )}
              </div>

              {renderContent()}

              {isEditing && (
                <div className="mt-6 flex justify-end space-x-3">
                  <button
                    onClick={handleCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                    disabled={isSaving}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    disabled={isSaving}
                  >
                    {isSaving ? "Saving..." : "Save Changes"}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
