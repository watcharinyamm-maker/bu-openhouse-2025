'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const ChatSection: React.FC = () => {
  const router = useRouter();

  const handleStartChat = () => {
    router.push('/chat');
  };

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Chat?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Let's have a conversation! Whether you want to discuss a project, 
            ask questions, or just say hello - I'm here and ready to chat.
          </p>
        </div>

        {/* Chat Preview Card */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12 max-w-2xl mx-auto">
          <div className="space-y-6">
            {/* Chat Simulation */}
            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-gray-700/50 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
                  <p className="text-gray-300 text-sm">
                    👋 Hi there! Thanks for visiting my profile. How can I help you today?
                  </p>
                </div>
              </div>
              
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl rounded-br-md px-4 py-3 max-w-xs">
                  <p className="text-white text-sm">
                    Hello! I'd love to discuss a potential project with you.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-start">
                <div className="bg-gray-700/50 rounded-2xl rounded-bl-md px-4 py-3 max-w-xs">
                  <p className="text-gray-300 text-sm">
                    That sounds exciting! Tell me more about what you have in mind...
                  </p>
                </div>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex justify-start">
              <div className="bg-gray-700/50 rounded-2xl rounded-bl-md px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Fast Response</h3>
            <p className="text-gray-400 text-sm">
              I typically respond within a few hours during business hours
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Professional</h3>
            <p className="text-gray-400 text-sm">
              Friendly, professional communication focused on your needs
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Available 24/7</h3>
            <p className="text-gray-400 text-sm">
              Send a message anytime - I'll get back to you as soon as possible
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-6">
          <button
            onClick={handleStartChat}
            className="group relative px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl"
          >
            <span className="relative z-10 flex items-center justify-center space-x-3">
              <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Start Chat Now</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-gray-400 text-sm">
            Click the button above to open the chat interface
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChatSection;
