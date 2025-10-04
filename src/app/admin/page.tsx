
'use client';
import { AnimatedWrapper } from "@/components/layout/AnimatedWrapper";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, Edit, Trash2, Share2, Facebook, Twitter, Linkedin, MessageSquare } from "lucide-react";
import { getPosts, Post } from "@/lib/blog-data";
import Link from "next/link";
import { withAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { deletePost } from "./actions";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";
import { BackButton } from "@/components/layout/BackButton";


function AdminPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [siteUrl, setSiteUrl] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Ensure this runs only on the client
    setSiteUrl(window.location.origin);
    
    async function fetchPosts() {
      const fetchedPosts = await getPosts();
      setPosts(fetchedPosts);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  const handleDelete = async (postId: string) => {
    const result = await deletePost(postId);
    if (result.success) {
      toast({
        title: "Success",
        description: result.message,
      });
      // Re-fetch posts to update the list
      await fetchPosts();
    } else {
      toast({
        title: "Error",
        description: result.message,
        variant: "destructive",
      });
    }
  };

  const createShareLink = (url: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(url, '_blank', 'noopener,noreferrer,width=600,height=400');
  };
  
  const fetchPosts = async () => {
    setLoading(true);
    const fetchedPosts = await getPosts();
    setPosts(fetchedPosts);
    setLoading(false);
  }

  return (
    <div className="pt-16">
      <section className="bg-secondary/30 relative">
        <BackButton />
        <div className="container px-4 md:px-6 py-10">
           <AnimatedWrapper>
            <h1 className="text-3xl md:text-4xl font-headline font-bold mt-4">Admin Dashboard</h1>
            <p className="mt-2 text-muted-foreground">
                Manage your website content.
            </p>
          </AnimatedWrapper>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <AnimatedWrapper>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Blog Posts</CardTitle>
                  <CardDescription>Create, edit, and delete blog posts.</CardDescription>
                </div>
                <Button asChild>
                  <Link href="/admin/new-post">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    New Post
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg">
                  <div className="divide-y">
                    {loading ? (
                      <div className="p-8 text-center text-muted-foreground">
                        Loading posts...
                      </div>
                    ) : posts.length > 0 ? (
                      posts.map(post => {
                        const postUrl = `${siteUrl}/blog/${post.slug}`;
                        const shareText = encodeURIComponent(`Check out this article: ${post.title}`);
                        
                        return (
                          <div key={post.id} className="flex items-center justify-between p-4 hover:bg-muted/50">
                            <div className="flex items-center gap-4">
                              <FileText className="h-6 w-6 text-muted-foreground" />
                              <div>
                                <p className="font-semibold">{post.title}</p>
                                <p className="text-sm text-muted-foreground">Category: {post.category} | Published: {post.date}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                               <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="outline" size="sm">
                                    <Share2 className="mr-2 h-4 w-4" /> Share
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem onClick={createShareLink(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}`)}>
                                    <Facebook className="mr-2 h-4 w-4" /> Facebook
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={createShareLink(`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${shareText}`)}>
                                    <Twitter className="mr-2 h-4 w-4" /> Twitter / X
                                  </DropdownMenuItem>
                                  <DropdownMenuItem onClick={createShareLink(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.excerpt)}`)}>
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                  </DropdownMenuItem>
                                   <DropdownMenuItem asChild>
                                    <a href={`https://wa.me/?text=${shareText}%20${encodeURIComponent(postUrl)}`} data-action="share/whatsapp/share" target="_blank" rel="noopener noreferrer">
                                      <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                                    </a>
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>

                              <Button variant="outline" size="sm" asChild>
                                 <Link href={`/admin/edit/${post.slug}`}>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </Link>
                              </Button>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm">
                                    <Trash2 className="mr-2 h-4 w-4" />
                                    Delete
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This action cannot be undone. This will permanently delete the post
                                      titled "{post.title}".
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      onClick={() => handleDelete(post.id)}
                                      className="bg-destructive hover:bg-destructive/90"
                                    >
                                      Continue
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            </div>
                          </div>
                        )
                      })
                    ) : (
                      <div className="p-8 text-center text-muted-foreground">
                        No posts found. Add your first post to see it here.
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedWrapper>
        </div>
      </section>
    </div>
  );
}

export default withAuth(AdminPage);
