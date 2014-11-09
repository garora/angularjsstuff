using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(angularjsstuff.Startup))]
namespace angularjsstuff
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
