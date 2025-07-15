import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { Link } from 'react-router-dom'; // For routing

const GEMINI_API_KEY = 'AIzaSyD-vXCEpyeHgEcrqlkbmhdNZAabG33KyrY'; // For local dev only. Do NOT expose in prod.

const Tailwind = () => {
  const [prompt, setPrompt] = useState('');
  const [reply, setReply] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(null);

  const runGemini = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    try {
      const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-001' });

      const instruction = `You are a Tailwind CSS expert. Respond only with minimal, copy-paste-ready Tailwind className strings. No explanations, no extra text, no greetings. Keep the answer concise and under 100 words. Format only as: className="..." and ensure it's directly usable in React or HTML.\n\nPrompt: `;

      const result = await model.generateContent(instruction + prompt);
      const response = await result.response;
      const text = response.text();

      setReply("```html\n" + text + "\n```");
    } catch (error) {
      setReply('❌ Error fetching response. Try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-white text-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-3xl p-8 rounded-2xl bg-white border border-gray-200 shadow-xl">

        {/* Back to Home */}
        <div className="mb-6">
          <Link to="/" className="text-sm text-purple-600 hover:underline font-medium">
            ← Back to Home
          </Link>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6 text-purple-600">TailwindGPT ⚡</h1>

        <input
          type="text"
          placeholder="e.g. Tailwind CSS for responsive navbar"
          className="w-full p-4 rounded-xl text-gray-900 bg-gray-100 border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none mb-4"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          onClick={runGemini}
          disabled={loading}
          className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 px-6 py-3 w-full rounded-xl font-medium text-white shadow-lg"
        >
          {loading ? 'Asking Gemini...' : 'Ask Tailwind Question'}
        </button>

        {reply && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-purple-300 text-sm md:text-base">
            {reply
              .replace(/```html\n?|```/g, '')
              .split('\n')
              .filter((line) => line.trim() !== '')
              .map((line, index) => (
                <div
                  key={index}
                  className="relative bg-white border border-gray-300 rounded-md p-3 mb-3 text-sm flex items-start justify-between group"
                >
                  <code className="text-green-600 break-all">{line}</code>
                  <button
                    onClick={async () => {
                      await navigator.clipboard.writeText(line);
                      setCopied(index);
                      setTimeout(() => setCopied(null), 1200);
                    }}
                    className="ml-4 text-xs bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded transition group-hover:opacity-100 opacity-80"
                  >
                    {copied === index ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Tailwind;
