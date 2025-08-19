export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Chat Page</h1>
        <p className="text-gray-600 mb-6">
          Welcome to the chat page! This is where your chat interface would be implemented.
        </p>
        
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 text-left">
            <p className="text-sm text-gray-600">
              💡 <strong>Implementation Ideas:</strong>
            </p>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              <li>• Real-time messaging with WebSockets</li>
              <li>• Integration with chat APIs</li>
              <li>• File sharing capabilities</li>
              <li>• Message history and search</li>
            </ul>
          </div>
          
          <a 
            href="/"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
          >
            ← Back to Profile Cards
          </a>
        </div>
      </div>
    </div>
  )
}
