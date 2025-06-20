import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [challenges, setChallenges] = useState([
    { id: 1, title: 'SQL Injection Basics', category: 'Web', difficulty: 'Easy', points: 100, solved: false },
    { id: 2, title: 'XSS Challenge', category: 'Web', difficulty: 'Medium', points: 200, solved: false },
    { id: 3, title: 'Caesar Cipher', category: 'Crypto', difficulty: 'Easy', points: 150, solved: true },
    { id: 4, title: 'Buffer Overflow', category: 'Binary', difficulty: 'Hard', points: 500, solved: false },
  ]);
  
  const [news, setNews] = useState([
    { id: 1, title: 'New Zero-Day Vulnerability in Apache', date: '2025-06-15', category: 'CVE' },
    { id: 2, title: 'Advanced Persistent Threat Techniques', date: '2025-06-14', category: 'Tutorial' },
    { id: 3, title: 'Bug Bounty Program Updates', date: '2025-06-13', category: 'News' },
  ]);

  const [tools, setTools] = useState([
    { id: 1, name: 'Nmap Scanner', category: 'Network', description: 'Network discovery and security auditing' },
    { id: 2, name: 'SQL Injector', category: 'Web', description: 'Test for SQL injection vulnerabilities' },
    { id: 3, name: 'Hash Cracker', category: 'Crypto', description: 'Crack common hash algorithms' },
    { id: 4, name: 'Port Scanner', category: 'Network', description: 'Scan for open ports and services' },
  ]);

  const [forumPosts, setForumPosts] = useState([
    { id: 1, title: 'How to get started with Bug Bounty?', author: 'n00b_hacker', replies: 15, category: 'General' },
    { id: 2, title: 'New OWASP Top 10 Discussion', author: 'sec_expert', replies: 8, category: 'Web Security' },
    { id: 3, title: 'CTF WriteUp: HackTheBox Machine', author: 'elite_pwner', replies: 23, category: 'CTF' },
  ]);

  const leaderboard = [
    { rank: 1, username: 'cyber_ninja', points: 2450, solved: 18 },
    { rank: 2, username: 'hack_master', points: 2100, solved: 15 },
    { rank: 3, username: 'script_kiddie', points: 1850, solved: 12 },
    { rank: 4, username: 'anon_user', points: 1400, solved: 9 },
  ];

  const handleLogin = () => {
    setUser({ username: 'guest_hacker', points: 0, rank: 'Newbie' });
  };

  const handleSolveChallenge = (challengeId) => {
    setChallenges(prev => prev.map(challenge => 
      challenge.id === challengeId ? { ...challenge, solved: true } : challenge
    ));
  };

  const renderDashboard = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all">
          <div className="text-green-400 text-2xl font-bold">{challenges.filter(c => c.solved).length}</div>
          <div className="text-gray-300">Challenges Solved</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-cyan-500/30 hover:border-cyan-500/60 transition-all">
          <div className="text-cyan-400 text-2xl font-bold">{user ? user.points : 0}</div>
          <div className="text-gray-300">Total Points</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-purple-500/30 hover:border-purple-500/60 transition-all">
          <div className="text-purple-400 text-2xl font-bold">{tools.length}</div>
          <div className="text-gray-300">Security Tools</div>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg border border-red-500/30 hover:border-red-500/60 transition-all">
          <div className="text-red-400 text-2xl font-bold">{news.length}</div>
          <div className="text-gray-300">Latest Alerts</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-green-400 mb-4">🏆 Leaderboard</h3>
          <div className="space-y-3">
            {leaderboard.map(player => (
              <div key={player.rank} className="flex items-center justify-between bg-gray-900 p-3 rounded">
                <div className="flex items-center space-x-3">
                  <span className="text-yellow-400 font-bold">#{player.rank}</span>
                  <span className="text-gray-300">{player.username}</span>
                </div>
                <div className="text-green-400 font-bold">{player.points} pts</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">🔥 Recent Activity</h3>
          <div className="space-y-3">
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-gray-300">New challenge: <span className="text-green-400">Web Exploitation</span></div>
              <div className="text-gray-500 text-sm">2 hours ago</div>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-gray-300">CVE-2025-0001 published</div>
              <div className="text-gray-500 text-sm">4 hours ago</div>
            </div>
            <div className="bg-gray-900 p-3 rounded">
              <div className="text-gray-300">Forum discussion: <span className="text-purple-400">OSINT Techniques</span></div>
              <div className="text-gray-500 text-sm">6 hours ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCTF = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-green-400 mb-4">🎯 Capture The Flag</h2>
        <p className="text-gray-400">Test your skills with our cybersecurity challenges</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {challenges.map(challenge => (
          <div key={challenge.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-green-500/50 transition-all">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
              {challenge.solved && <span className="text-green-400">✓</span>}
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-400">Category:</span>
                <span className="text-cyan-400">{challenge.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Difficulty:</span>
                <span className={`${challenge.difficulty === 'Easy' ? 'text-green-400' : 
                  challenge.difficulty === 'Medium' ? 'text-yellow-400' : 'text-red-400'}`}>
                  {challenge.difficulty}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Points:</span>
                <span className="text-purple-400">{challenge.points}</span>
              </div>
            </div>
            <button 
              onClick={() => handleSolveChallenge(challenge.id)}
              disabled={challenge.solved}
              className={`w-full py-2 px-4 rounded ${challenge.solved ? 
                'bg-green-600 text-white cursor-not-allowed' : 
                'bg-gray-700 hover:bg-gray-600 text-white'} transition-colors`}
            >
              {challenge.solved ? 'Solved' : 'Start Challenge'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4">📰 Security News</h2>
        <p className="text-gray-400">Stay updated with the latest cybersecurity threats and tutorials</p>
      </div>

      <div className="space-y-6">
        {news.map(article => (
          <div key={article.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-bold text-white hover:text-cyan-400 cursor-pointer">{article.title}</h3>
              <span className={`px-3 py-1 rounded text-sm ${
                article.category === 'CVE' ? 'bg-red-600 text-white' :
                article.category === 'Tutorial' ? 'bg-green-600 text-white' :
                'bg-blue-600 text-white'
              }`}>
                {article.category}
              </span>
            </div>
            <div className="text-gray-400 text-sm mb-3">{article.date}</div>
            <p className="text-gray-300">
              {article.category === 'CVE' ? 'Critical vulnerability discovered requiring immediate attention...' :
               article.category === 'Tutorial' ? 'Learn advanced techniques used by security professionals...' :
               'Latest updates and announcements from the security community...'}
            </p>
            <button className="mt-4 text-cyan-400 hover:text-cyan-300 font-semibold">Read More →</button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTools = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4">🛠️ Security Tools</h2>
        <p className="text-gray-400">Professional penetration testing and security analysis tools</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tools.map(tool => (
          <div key={tool.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all">
            <h3 className="text-lg font-bold text-white mb-2">{tool.name}</h3>
            <div className="text-purple-400 text-sm mb-3">{tool.category}</div>
            <p className="text-gray-300 mb-4">{tool.description}</p>
            <button className="w-full bg-purple-600 hover:bg-purple-500 text-white py-2 px-4 rounded transition-colors">
              Launch Tool
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderForum = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-orange-400 mb-4">💬 Community Forum</h2>
        <p className="text-gray-400">Connect with fellow security researchers and share knowledge</p>
      </div>

      <div className="space-y-4">
        {forumPosts.map(post => (
          <div key={post.id} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-white hover:text-orange-400 cursor-pointer">{post.title}</h3>
              <span className="text-orange-400 text-sm">{post.category}</span>
            </div>
            <div className="flex justify-between items-center text-sm text-gray-400">
              <span>by {post.author}</span>
              <span>{post.replies} replies</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
        <h3 className="text-lg font-bold text-white mb-4">Start a New Discussion</h3>
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Discussion title..." 
            className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
          />
          <textarea 
            placeholder="What would you like to discuss?" 
            rows="4"
            className="w-full bg-gray-900 border border-gray-600 rounded px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
          ></textarea>
          <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2 rounded transition-colors">
            Post Discussion
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🕶️</span>
              <h1 className="text-2xl font-bold text-green-400">DarkWeb</h1>
              <span className="text-gray-400">| Hacker Platform</span>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              {['dashboard', 'ctf', 'news', 'tools', 'forum'].map(section => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`capitalize px-3 py-2 rounded transition-colors ${
                    activeSection === section 
                      ? 'text-green-400 bg-gray-800' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-green-400">👤 {user.username}</span>
                  <span className="text-gray-400">({user.points} pts)</span>
                </div>
              ) : (
                <button 
                  onClick={handleLogin}
                  className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded transition-colors"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-gray-900 border-b border-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex space-x-2 overflow-x-auto">
            {['dashboard', 'ctf', 'news', 'tools', 'forum'].map(section => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize px-3 py-2 rounded whitespace-nowrap transition-colors ${
                  activeSection === section 
                    ? 'text-green-400 bg-gray-800' 
                    : 'text-gray-300'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'ctf' && renderCTF()}
        {activeSection === 'news' && renderNews()}
        {activeSection === 'tools' && renderTools()}
        {activeSection === 'forum' && renderForum()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-400">
            <p>© 2025 DarkWeb Hacker Platform. Built for ethical hackers and security professionals.</p>
            <p className="mt-2 text-sm">⚠️ For educational and authorized testing purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;