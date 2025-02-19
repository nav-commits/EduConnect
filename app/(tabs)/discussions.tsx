import { View, Text, StyleSheet, ScrollView, Image, TextInput, Pressable } from 'react-native';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const discussions = [
  {
    id: 1,
    user: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    title: 'How to get started with React Native?',
    content: 'I\'m new to mobile development and wondering what\'s the best way to begin learning React Native. Any suggestions?',
    replies: [
      {
        id: 1,
        user: {
          name: 'Maria Garcia',
          avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
        },
        content: 'Start with the official React Native documentation and then try building small projects. That\'s how I learned!',
        likes: 12,
      },
      {
        id: 2,
        user: {
          name: 'James Wilson',
          avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
        },
        content: 'Expo is a great way to get started. It removes a lot of the initial setup complexity.',
        likes: 8,
      },
    ],
  },
];

function DiscussionCard({ discussion }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [newReply, setNewReply] = useState('');

  return (
    <View style={styles.discussionCard}>
      <View style={styles.discussionHeader}>
        <Image
          source={{ uri: discussion.user.avatar }}
          style={styles.avatar}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{discussion.user.name}</Text>
          <Text style={styles.timestamp}>2 hours ago</Text>
        </View>
      </View>
      <Text style={styles.discussionTitle}>{discussion.title}</Text>
      <Text style={styles.discussionContent}>{discussion.content}</Text>
      
      <Pressable
        style={styles.repliesButton}
        onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.repliesButtonText}>
          {isExpanded ? 'Hide Replies' : `Show Replies (${discussion.replies.length})`}
        </Text>
        <Ionicons
          name={isExpanded ? 'chevron-up' : 'chevron-down'}
          size={16}
          color="#6366f1"
        />
      </Pressable>

      {isExpanded && (
        <View style={styles.repliesSection}>
          {discussion.replies.map((reply) => (
            <View key={reply.id} style={styles.reply}>
              <Image
                source={{ uri: reply.user.avatar }}
                style={styles.replyAvatar}
              />
              <View style={styles.replyContent}>
                <Text style={styles.replyUserName}>{reply.user.name}</Text>
                <Text style={styles.replyText}>{reply.content}</Text>
                <View style={styles.replyActions}>
                  <Pressable style={styles.likeButton}>
                    <Ionicons name="heart-outline" size={16} color="#6b7280" />
                    <Text style={styles.likeCount}>{reply.likes}</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          ))}
          
          <View style={styles.replyInput}>
            <TextInput
              style={styles.input}
              placeholder="Write a reply..."
              value={newReply}
              onChangeText={setNewReply}
              multiline
            />
            <Pressable
              style={[
                styles.sendButton,
                { opacity: newReply.length > 0 ? 1 : 0.5 },
              ]}
              disabled={newReply.length === 0}>
              <Ionicons name="send" size={20} color="#fff" />
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

export default function DiscussionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Discussions</Text>
        <Text style={styles.subtitle}>Join the conversation with fellow learners</Text>
      </View>
      <View style={styles.discussionList}>
        {discussions.map((discussion) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  discussionList: {
    padding: 16,
  },
  discussionCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  discussionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  timestamp: {
    fontSize: 14,
    color: '#6b7280',
  },
  discussionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  discussionContent: {
    fontSize: 16,
    color: '#374151',
    lineHeight: 24,
  },
  repliesButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    padding: 8,
  },
  repliesButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6366f1',
    marginRight: 4,
  },
  repliesSection: {
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    paddingTop: 16,
  },
  reply: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  replyAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  replyContent: {
    flex: 1,
  },
  replyUserName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  replyText: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  replyActions: {
    flexDirection: 'row',
    marginTop: 8,
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4,
  },
  likeCount: {
    fontSize: 14,
    color: '#6b7280',
    marginLeft: 4,
  },
  replyInput: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
    gap: 8,
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 100,
    backgroundColor: '#f3f4f6',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: '#374151',
  },
  sendButton: {
    backgroundColor: '#6366f1',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});