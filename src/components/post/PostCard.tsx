import { formatDistanceToNow } from 'date-fns' 
import { ja } from 'date-fns/locale' 
import Link from 'next/link' 
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card" 
import Image from 'next/image' 
import { PostCardProps } from '@/types/post'

export default function PostCard({ post }: PostCardProps) { 
    return (
        <Card className="hover:shadow-lg transition-shadow py-0">
            <Link href={`/posts/${post.id}`}>
                {
                    post.topImage && ( 
                        <div className="relative w-full h-48 mb-4"> 
                            <Image
                                src={post.topImage} 
                                alt={post.title} 
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                                className="rounded-t-md object-cover" 
                                priority
                            /> 
                        </div> 
                    )
                }
                <CardHeader>
                    <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                        {post.content}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{post.author.name}</span>
                        <time>{
                            formatDistanceToNow(new Date(post.createdAt),{
                                addSuffix: true, //前
                                locale: ja
                            })}
                        </time>

                    </div>
                </CardContent>
            </Link>
        </Card>

    )
}
