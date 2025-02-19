import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';

const courses = [
  {
    id: 1,
    title: 'Web Development Fundamentals',
    instructor: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    duration: '8 weeks',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    instructor: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb',
    duration: '10 weeks',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Data Science Essentials',
    instructor: 'Emily Rodriguez',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    duration: '12 weeks',
    level: 'Advanced',
  },
];

function CourseCard({ course }) {
  return (
    <Link href={`/course/${course.id}`} asChild>
      <Pressable style={styles.courseCard}>
        <Image
          source={{ uri: course.image }}
          style={styles.courseImage}
        />
        <View style={styles.courseInfo}>
          <Text style={styles.courseTitle}>{course.title}</Text>
          <Text style={styles.instructorName}>by {course.instructor}</Text>
          <View style={styles.courseMetaContainer}>
            <Text style={styles.courseMeta}>{course.duration}</Text>
            <Text style={styles.courseMeta}>•</Text>
            <Text style={styles.courseMeta}>{course.level}</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

export default function CoursesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Courses</Text>
        <Text style={styles.subtitle}>Expand your knowledge with our expert-led courses</Text>
      </View>
      <View style={styles.courseList}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
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
  courseList: {
    padding: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  courseImage: {
    width: '100%',
    height: 180,
  },
  courseInfo: {
    padding: 16,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  instructorName: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
  },
  courseMetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  courseMeta: {
    fontSize: 14,
    color: '#6b7280',
  },
});