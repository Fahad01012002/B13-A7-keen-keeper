'use client';
import { useState } from 'react';

export default function TextFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  // শুধু প্লেইন টেক্সট (কোনো টাইপ প্রপার্টি নেই)
  const timelineTexts = [
    "Meetup with Tom Baker - March 29, 2026",
    "Text with Sarah Chen - March 28, 2026",
    "Meetup with Olivia Martinez - March 26, 2026",
    "Video with Aisha Patel - March 23, 2026",
    "Meetup with Sarah Chen - March 21, 2026"
  ];

  // শুধু "Meetup" ওয়ালা টেক্সট ফিল্টার করা
  const filteredData = searchTerm === 'all' || !searchTerm
    ? timelineTexts
    : timelineTexts.filter(text => text.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <div className="mb-4 flex gap-2">
        <button
          onClick={() => setSearchTerm('')}
          className="px-3 py-1 bg-gray-200 rounded"
        >
          All
        </button>
        <button
          onClick={() => setSearchTerm('meetup')}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Only Meetup
        </button>
      </div>

      <div className="space-y-2">
        {filteredData.map((text, index) => (
          <div key={index} className="p-3 border rounded">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}