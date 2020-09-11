import cookie from 'cookie'

export default async (req,res)=>{

  if(req.method.toLowerCase()==='post'){
    res.setHeader('Set-Cookie', cookie.serialize('auth', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge:-1,
      path: '/'
    }))
    res.json({message: 'You was logout'});
  }
}